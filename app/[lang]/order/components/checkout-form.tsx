'use client';
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";

export default function CheckoutForm() {
    return (
        <div className="space-y-4">
            <div>
                <Label htmlFor="fullName">Full Name</Label>
                <Input id="fullName" placeholder="John Doe"/>
            </div>
            <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" placeholder="+998 90 123 45 67"/>
            </div>
            <div>
                <Label htmlFor="address">Address</Label>
                <Input id="address" placeholder="Tashkent, Yunusobod 4"/>
            </div>
        </div>
    );
}
