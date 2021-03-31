<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;

// resources
use App\Http\Resources\Order as OrderResource;
use App\Http\Resources\OrderCollection;
use App\Http\Resources\OrderWithProduct as OrderWithProductResource;
use App\Http\Resources\OrderWithProductCollection;

// request
use App\Http\Requests\StoreOrder;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $order = Order::all();
        return new OrderCollection($order);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  App\Http\Requests\StoreOrder  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreOrder $request)
    {
        $requestOrder = $request->only([
            'user_id', 'product_id', 'quantity', 'notes'
        ]);
        $order = auth()->user()->orders()->create($requestOrder);
        return new OrderResource($order);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function show(Order $order)
    {
        return new OrderResource($order);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Order $order)
    {
        $requestOrder = $request->only([
            'product_id', 'quantity', 'notes'
        ]);
        $order->update($requestOrder);
        return new OrderResource($order);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function destroy(Order $order)
    {
        $order->delete();
    }
}
