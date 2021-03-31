<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderItem extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = [
        'product_id',
        'order_id',
        'quantity',
        'notes'
    ];

    protected $casts = [
        'product_id'    => 'integer',
        'order_id'      => 'integer',
        'notes'         => 'string',
    ];

    protected $attributes = [
        'quantity' => 1,
    ];

    public function order() {
        return $this->belongsTo(Order::class);
    }

    public function product() {
        return $this->belongsTo(Product::class);
    }
}
