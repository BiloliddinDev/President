'use client';
import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export default function PaymentMethod() {
    const [method, setMethod] = useState("cash");

    return (
        <div className="space-y-2">
            <h3 className="text-lg font-medium">Payment Method</h3>
            <RadioGroup defaultValue="cash" onValueChange={setMethod}>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="cash" id="cash" />
                    <Label htmlFor="cash">Cash</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="card" id="card" />
                    <Label htmlFor="card">Card</Label>
                </div>
            </RadioGroup>
        </div>
    );
}
