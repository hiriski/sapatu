<?php

namespace App\Http\Controllers;

use App\Models\OrderItem;
use Illuminate\Http\Request;
use App\Http\Requests\StoreOrderItem;

// resources
use App\Http\Resources\OrderItem as OrderItemResource;
use App\Http\Resources\OrderItemCollection;

class OrderItemController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $orderItems = OrderItems::all();
        return new OrderItemCollection($orderItems);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  App\Http\Requests\StoreOrderItem  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreOrderItem $request)
    {
        $reqOrderItem = $request->only([
            'product_id', 'order_id', 'notes'
        ]);
        $orderItem = OrderItem::create($reqOrderItem);
        return new OrderItemResource($orderItem);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\OrderItem  $orderItem
     * @return \Illuminate\Http\Response
     */
    public function show(OrderItem $orderItem)
    {
        return OrderItemResource($orderItem);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\OrderItem  $orderItem
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, OrderItem $orderItem)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\OrderItem  $orderItem
     * @return \Illuminate\Http\Response
     */
    public function destroy(OrderItem $orderItem)
    {
        $orderItem->delete();
    }
}
