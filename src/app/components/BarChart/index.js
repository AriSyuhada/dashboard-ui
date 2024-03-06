"use client";
import { useEffect, useRef } from "react";
import styles from "./styles.module.scss";

const DATA = [30, 20, 50, 40, 70];
const LABELS = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];

export default function BarChart({ width = 400, height = 300 }) {
  const canvasRef = useRef(null);
  const padding = 20;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Calculate the maximum value in the data array
    const maxValue = Math.max(...DATA);
    const divValue = maxValue / 10;

    // Calculate the width of each bar
    const barWidth = (width - (DATA.length - 1) * 10) / DATA.length;

    // Calculate the height scale
    const heightScale = (height - 2 * padding) / maxValue;

    const baseColors = ['#FF5733', '#FFC300', '#DAF7A6', '#7DCEA0', '#4A90E2'];

    // Draw Cartesian graph lines
    ctx.beginPath();
    ctx.strokeStyle = '#ccc'; // Color for the Cartesian graph lines
    ctx.lineWidth = 1;

    // Vertical lines
    for (let i = 0; i <= divValue; i++) {
      const y = height - padding - (i * (height - 2 * padding)) / divValue;
      ctx.moveTo(padding, y);
      ctx.lineTo(width - padding, y);
      // Draw labels on the y-axis
      ctx.font = 'bold 12px Arial';
      ctx.fillStyle = '#000';
      const value = Math.round(maxValue - maxValue * (divValue - i) / divValue);
      ctx.fillText(value.toString(), padding - 20, y); // Adjust label position as needed
    }

    // Horizontal lines
    for (let i = 0; i < DATA.length; i++) {
      const x = padding + i * barWidth;
      ctx.moveTo(x, padding);
      ctx.lineTo(x, height - padding);
    }
    ctx.stroke();

    // Draw bars and labels
    for (let i = 0; i < DATA.length; i++) {
      const barHeight = DATA[i] * heightScale;

      // Set fill color (random color for each bar)
      const randomIndex = i % baseColors.length;;
      const color = baseColors[randomIndex];
      ctx.fillStyle = color;

      // Draw bar
      ctx.fillRect(i * barWidth + padding, height - padding - barHeight, barWidth, barHeight);

      // Draw label
      ctx.fillStyle = '#000';
      ctx.font = 'bold 12px Arial';
      ctx.fillText(LABELS[i], i * barWidth + barWidth / 2 + padding - 12, height - 5);
    }
  }, [DATA, LABELS, width, height]);

  return <canvas ref={canvasRef} width={width} height={height} />;
}