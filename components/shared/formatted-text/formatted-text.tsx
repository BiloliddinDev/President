"use client";

import React from "react";

export default function FormattedText({input}: {input: string |undefined}) {
    const lines = (input ?? "").split("\n");

    const elements: React.ReactNode[] = [];
    let currentList: React.ReactNode[] = [];

    lines.forEach((line, index) => {
        const trimmed = line.trim();

        if (trimmed.startsWith("•")) {
            currentList.push(
                <li key={index} className="ml-4">
                    {trimmed.replace(/^•\s*/, "")}
                </li>
            );
            return;
        }

        if (currentList.length > 0) {
            elements.push(
                <ul key={`list-${index}`} className="text-sm list-disc list-inside space-y-1 mb-4">
                    {currentList}
                </ul>
            );
            currentList = [];
        }

        if (trimmed === "") {
            elements.push(<div key={index} className="h-4"/>);
        } else {
            elements.push(
                <p key={index} className="text-sm leading-relaxed text-gray-800">
                    {trimmed}
                </p>
            );
        }
    });

    if (currentList.length > 0) {
        elements.push(
            <ul key="last-list" className="list-disc list-inside space-y-1 mb-4">
                {currentList}
            </ul>
        );
    }

    return <div>{elements}</div>;
}
