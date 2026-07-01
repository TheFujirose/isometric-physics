/**
 * Pure vessel-position integration step, detached from React.
 */
import type { Point } from './isometric.js';

/**
 * Advances a vessel's position by one physics step.
 * @param pos - Current { x, y } position in world units.
 * @param velocity - Current velocity in world units per second.
 * @param rotationDeg - Current heading in degrees (0 = north, 90 = east).
 * @param deltaTime - Elapsed time since the last step, in seconds.
 * @param gridSize - Total span of the (square) world; position wraps at ±gridSize/2.
 * @returns The new { x, y } position, wrapped to stay within the world bounds.
 */
export const stepVesselPosition = (
    pos: Point,
    velocity: number,
    rotationDeg: number,
    deltaTime: number,
    gridSize: number,
): Point => {
    if (velocity === 0) return pos;

    const limit = gridSize / 2;
    const rad = (-rotationDeg * Math.PI) / 180;
    const dx = -velocity * Math.sin(rad) * deltaTime;
    const dy = -velocity * Math.cos(rad) * deltaTime;

    let newX = pos.x + dx;
    let newY = pos.y + dy;
    if (newX >  limit) newX -= gridSize;
    if (newX < -limit) newX += gridSize;
    if (newY >  limit) newY -= gridSize;
    if (newY < -limit) newY += gridSize;

    return { x: newX, y: newY };
};
