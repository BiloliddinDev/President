export default function OrderSummary() {
    return (
        <div className="border p-4 rounded-lg space-y-2 shadow-sm">
            <h3 className="text-lg font-semibold">Order Summary</h3>
            <div className="flex justify-between">
                <span>Products:</span>
                <span>112 000 000 сум</span>
            </div>
            <div className="flex justify-between">
                <span>Delivery:</span>
                <span>10 000 сум</span>
            </div>
            <hr />
            <div className="flex justify-between font-bold">
                <span>Total:</span>
                <span>112 010 000 сум</span>
            </div>
        </div>
    );
}
