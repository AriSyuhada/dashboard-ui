"use client";
import { useEffect, useRef } from "react";
import styles from "./styles.module.scss";

const DATA = [50, 20, 30];
const LABELS = ['Done', 'In Progress', 'To do'];

export default function PieChart({ width = 600, height = 300 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Calculate total value of all data points
    const total = DATA.reduce((acc, curr) => acc + curr, 0);

    // Start angle for the first segment
    let startAngle = Math.PI / 2;

    // Draw pie chart segments
    for (let i = 0; i < DATA.length; i++) {
      const sliceAngle = (DATA[i] / total) * 2 * Math.PI;

      // Set fill color
      const baseColors = ['#DAF7A6', '#FFC300', '#FF5733', '#7DCEA0', '#4A90E2'];
      const colorIndex = i % baseColors.length;;
      const color = baseColors[colorIndex];
      ctx.fillStyle = color;

      // Draw segment
      ctx.beginPath();
      ctx.moveTo(width / 2, height / 2.5);
      ctx.arc(width / 2, height / 2.5, Math.min(width, height) / 2.5, startAngle, startAngle + sliceAngle);
      ctx.closePath();
      ctx.fill();

      // Update start angle for next segment
      startAngle += sliceAngle;

      // Legend Coordinate
      const labelStartX = 40;
      const labelY = height - 10;
      const labelSpacing = (width - labelStartX) / DATA.length;
      const labelX = labelStartX + i * labelSpacing;

      // Draw legend
      ctx.fillRect(labelX - 15, labelY - 10, 10, 10);
      ctx.fillStyle = '#000';
      ctx.font = 'bold 12px Arial';
      ctx.fillText(`${DATA[i] / total * 100}% ${LABELS[i]}`, labelX, labelY);
    }
  }, [DATA, LABELS, width, height]);

  return <canvas ref={canvasRef} width={width} height={height} />;
}