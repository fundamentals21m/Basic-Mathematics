import { useState } from 'react';

type IsometryType = 'translation' | 'rotation' | 'reflection' | 'glide';

interface Point {
  x: number;
  y: number;
}

export function IsometryExplorer() {
  const [isometryType, setIsometryType] = useState<IsometryType>('translation');
  const [translationX, setTranslationX] = useState(2);
  const [translationY, setTranslationY] = useState(1);
  const [rotationAngle, setRotationAngle] = useState(45);
  const [reflectionAngle, setReflectionAngle] = useState(0); // angle of line from x-axis
  const [glideDistance, setGlideDistance] = useState(2);

  // Original triangle vertices
  const original: Point[] = [
    { x: 1, y: 1 },
    { x: 3, y: 1 },
    { x: 2, y: 3 },
  ];

  // Apply transformation
  const transform = (p: Point): Point => {
    switch (isometryType) {
      case 'translation':
        return { x: p.x + translationX, y: p.y + translationY };
      case 'rotation': {
        const rad = (rotationAngle * Math.PI) / 180;
        return {
          x: p.x * Math.cos(rad) - p.y * Math.sin(rad),
          y: p.x * Math.sin(rad) + p.y * Math.cos(rad),
        };
      }
      case 'reflection': {
        const rad = (reflectionAngle * Math.PI) / 180;
        const cos2 = Math.cos(2 * rad);
        const sin2 = Math.sin(2 * rad);
        return {
          x: p.x * cos2 + p.y * sin2,
          y: p.x * sin2 - p.y * cos2,
        };
      }
      case 'glide': {
        // Reflect across x-axis, then translate along x
        return {
          x: p.x + glideDistance,
          y: -p.y,
        };
      }
      default:
        return p;
    }
  };

  const transformed = original.map(transform);

  // SVG coordinate transforms (flip y-axis)
  const toSvg = (p: Point) => ({
    x: 200 + p.x * 30,
    y: 150 - p.y * 30,
  });

  const originalSvg = original.map(toSvg);
  const transformedSvg = transformed.map(toSvg);

  // Calculate distance between two points
  const distance = (p1: Point, p2: Point) =>
    Math.sqrt((p2.x - p1.x) ** 2 + (p2.y - p1.y) ** 2);

  // Verify isometry: check that distances are preserved
  const originalDist = distance(original[0], original[1]);
  const transformedDist = distance(transformed[0], transformed[1]);
  const isPreserved = Math.abs(originalDist - transformedDist) < 0.0001;

  return (
    <div className="demo-container">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">
        Isometry Explorer
      </h3>

      {/* Isometry type selector */}
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {(['translation', 'rotation', 'reflection', 'glide'] as IsometryType[]).map((type) => (
          <button
            key={type}
            onClick={() => setIsometryType(type)}
            className={`px-4 py-2 rounded-lg text-sm transition-all ${
              isometryType === type
                ? 'bg-primary-500 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

      {/* Parameters */}
      <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700 mb-4">
        {isometryType === 'translation' && (
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-dark-500 mb-1">Translate X</label>
              <input
                type="range"
                min="-4"
                max="4"
                step="0.5"
                value={translationX}
                onChange={(e) => setTranslationX(Number(e.target.value))}
                className="w-full accent-primary-500"
              />
              <div className="text-center font-mono text-primary-400">{translationX}</div>
            </div>
            <div>
              <label className="block text-xs text-dark-500 mb-1">Translate Y</label>
              <input
                type="range"
                min="-4"
                max="4"
                step="0.5"
                value={translationY}
                onChange={(e) => setTranslationY(Number(e.target.value))}
                className="w-full accent-cyan-500"
              />
              <div className="text-center font-mono text-cyan-400">{translationY}</div>
            </div>
          </div>
        )}

        {isometryType === 'rotation' && (
          <div>
            <label className="block text-xs text-dark-500 mb-1">Rotation Angle (about origin)</label>
            <input
              type="range"
              min="-180"
              max="180"
              step="15"
              value={rotationAngle}
              onChange={(e) => setRotationAngle(Number(e.target.value))}
              className="w-full accent-primary-500"
            />
            <div className="text-center font-mono text-primary-400">{rotationAngle}°</div>
          </div>
        )}

        {isometryType === 'reflection' && (
          <div>
            <label className="block text-xs text-dark-500 mb-1">Line of Reflection (angle from x-axis)</label>
            <input
              type="range"
              min="0"
              max="180"
              step="15"
              value={reflectionAngle}
              onChange={(e) => setReflectionAngle(Number(e.target.value))}
              className="w-full accent-primary-500"
            />
            <div className="text-center font-mono text-primary-400">{reflectionAngle}°</div>
          </div>
        )}

        {isometryType === 'glide' && (
          <div>
            <label className="block text-xs text-dark-500 mb-1">Glide Distance (reflect across x-axis, then translate)</label>
            <input
              type="range"
              min="-4"
              max="4"
              step="0.5"
              value={glideDistance}
              onChange={(e) => setGlideDistance(Number(e.target.value))}
              className="w-full accent-primary-500"
            />
            <div className="text-center font-mono text-primary-400">{glideDistance}</div>
          </div>
        )}
      </div>

      {/* Visualization */}
      <div className="flex justify-center mb-4">
        <svg width="400" height="300" className="bg-dark-800 rounded-xl">
          {/* Grid */}
          {Array.from({ length: 13 }, (_, i) => i - 6).map((i) => (
            <g key={i}>
              <line
                x1={200 + i * 30}
                y1={0}
                x2={200 + i * 30}
                y2={300}
                stroke={i === 0 ? '#4b5563' : '#374151'}
                strokeWidth={i === 0 ? 2 : 1}
              />
              <line
                x1={0}
                y1={150 - i * 30}
                x2={400}
                y2={150 - i * 30}
                stroke={i === 0 ? '#4b5563' : '#374151'}
                strokeWidth={i === 0 ? 2 : 1}
              />
            </g>
          ))}

          {/* Reflection line (for reflection and glide) */}
          {isometryType === 'reflection' && (
            <line
              x1={200 - 150 * Math.cos((reflectionAngle * Math.PI) / 180)}
              y1={150 + 150 * Math.sin((reflectionAngle * Math.PI) / 180)}
              x2={200 + 150 * Math.cos((reflectionAngle * Math.PI) / 180)}
              y2={150 - 150 * Math.sin((reflectionAngle * Math.PI) / 180)}
              stroke="#f59e0b"
              strokeWidth={2}
              strokeDasharray="5,5"
            />
          )}
          {isometryType === 'glide' && (
            <line
              x1={0}
              y1={150}
              x2={400}
              y2={150}
              stroke="#f59e0b"
              strokeWidth={2}
              strokeDasharray="5,5"
            />
          )}

          {/* Rotation center (for rotation) */}
          {isometryType === 'rotation' && (
            <circle cx={200} cy={150} r={5} fill="#f59e0b" />
          )}

          {/* Original triangle */}
          <polygon
            points={originalSvg.map((p) => `${p.x},${p.y}`).join(' ')}
            fill="rgba(59, 130, 246, 0.3)"
            stroke="#3b82f6"
            strokeWidth={2}
          />
          {originalSvg.map((p, i) => (
            <circle key={`orig-${i}`} cx={p.x} cy={p.y} r={4} fill="#3b82f6" />
          ))}

          {/* Transformed triangle */}
          <polygon
            points={transformedSvg.map((p) => `${p.x},${p.y}`).join(' ')}
            fill="rgba(16, 185, 129, 0.3)"
            stroke="#10b981"
            strokeWidth={2}
          />
          {transformedSvg.map((p, i) => (
            <circle key={`trans-${i}`} cx={p.x} cy={p.y} r={4} fill="#10b981" />
          ))}

          {/* Translation vector (for translation) */}
          {isometryType === 'translation' && translationX !== 0 && translationY !== 0 && (
            <line
              x1={200}
              y1={150}
              x2={200 + translationX * 30}
              y2={150 - translationY * 30}
              stroke="#f59e0b"
              strokeWidth={2}
              markerEnd="url(#arrowhead)"
            />
          )}

          <defs>
            <marker
              id="arrowhead"
              markerWidth="10"
              markerHeight="7"
              refX="9"
              refY="3.5"
              orient="auto"
            >
              <polygon points="0 0, 10 3.5, 0 7" fill="#f59e0b" />
            </marker>
          </defs>

          {/* Labels */}
          <text x={10} y={20} fill="#6b7280" fontSize={12}>
            {isometryType === 'translation' && `T(x,y) = (x+${translationX}, y+${translationY})`}
            {isometryType === 'rotation' && `R${rotationAngle}°(x,y)`}
            {isometryType === 'reflection' && `Reflect across line at ${reflectionAngle}°`}
            {isometryType === 'glide' && `Glide: reflect, then translate by ${glideDistance}`}
          </text>
        </svg>
      </div>

      {/* Distance verification */}
      <div className={`p-4 rounded-xl border mb-4 ${
        isPreserved
          ? 'bg-emerald-500/10 border-emerald-500/30'
          : 'bg-red-500/10 border-red-500/30'
      }`}>
        <div className="text-center">
          <span className="text-dark-400">Distance AB: </span>
          <span className="font-mono text-primary-400">{originalDist.toFixed(2)}</span>
          <span className="text-dark-400 mx-2">→</span>
          <span className="font-mono text-emerald-400">{transformedDist.toFixed(2)}</span>
          {isPreserved && (
            <span className="ml-2 text-emerald-400">✓ Preserved!</span>
          )}
        </div>
      </div>

      {/* Legend */}
      <div className="flex justify-center gap-6 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-blue-500/50 border border-blue-500" />
          <span className="text-dark-400">Original</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-emerald-500/50 border border-emerald-500" />
          <span className="text-dark-400">Transformed</span>
        </div>
        {(isometryType === 'reflection' || isometryType === 'glide') && (
          <div className="flex items-center gap-2">
            <div className="w-4 h-0.5 bg-amber-500" style={{ borderStyle: 'dashed' }} />
            <span className="text-dark-400">Mirror line</span>
          </div>
        )}
      </div>

      <p className="text-sm text-dark-500 mt-4 text-center">
        An isometry preserves all distances between points.
      </p>
    </div>
  );
}
