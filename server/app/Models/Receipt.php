<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Receipt extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'order_id',
        'receipt_number',
        'image_url',
        'notes',
    ];

    protected $casts = [
        'user_id'           => 'integer',
        'order_id'          => 'integer',
        'receipt_number'    => 'integer',
    ];

    protected $with = ['order', 'user', 'image'];

    public function order() {
        return $this->belongsTo(Order::class);
    }

    public function user() {
        return $this->belongsTo(User::class);
    }

    public function image() {
        return $this->belongsTo(Image::class);
    }
}
