"use client";
import { useEffect, useRef } from "react";
import styles from "./styles.module.scss";

const DATA = [10, 20, 30, 25, 40, 35];
const LABELS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

export default function LineChart({ width = 600, height = 300 }) {
  const canvasRef = useRef(null);
  const padding = 20;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Clear the canvas
    ctx.clearRect(0, 0, width, height);

    // Calculate the maximum value in the data array
    const maxValue = Math.max(...DATA);
    const divValue = maxValue / 5;

    // Calculate the width and height of each data point
    const pointWidth = (width - 2 * padding) / (DATA.length - 1);
    const pointHeight = (height - 2 * padding) / maxValue;

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
      ctx.fillText(value.toString(), padding - 20, y + 5); // Adjust label position as needed
    }

    // Horizontal lines
    for (let i = 0; i < DATA.length; i++) {
      const x = padding + i * pointWidth;
      ctx.moveTo(x, padding);
      ctx.lineTo(x, height - padding);
    }
    ctx.stroke();

    // Draw the data points and connect them with lines
    ctx.beginPath();
    ctx.moveTo(padding, height - padding - DATA[0] * pointHeight);
    ctx.strokeStyle = '#4A90E2'; // Color for the line chart
    ctx.lineWidth = 2; //
    for (let i = 1; i < DATA.length; i++) {
      const x = padding + i * pointWidth;
      const y = height - padding - DATA[i] * pointHeight;
      ctx.lineTo(x, y);
      ctx.stroke();

      // Draw dot for each data point
      ctx.beginPath();
      ctx.arc(x, y, 4, 0, 2 * Math.PI);
      ctx.fillStyle = '#4A90E2'; // Dot color
      ctx.fill();
    }
    ctx.stroke();

    // Draw labels
    ctx.font = 'bold 12px Arial';
    ctx.fillStyle = '#000';
    for (let i = 0; i < LABELS.length; i++) {
      const x = padding + i * pointWidth;
      const y = height - padding + 20;
      ctx.fillText(LABELS[i], x, y);
    }
  }, [DATA, LABELS, width, height]);

  return <canvas className={styles.container} ref={canvasRef} width={width} height={height} />;
}