<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory, SoftDeletes;

    /**
     * Product statuses
     */
    const ACTIVE = "active";
    const INACTIVE = "inactive";

    protected $fillable = [
        'user_id',
        'title',
        'image_id',
        'body',
        'price',
        'size',
        'stock'
    ];

    protected $casts = [
        'user_id'   => 'integer',
        'image_id'  => 'integer',
        'price'     => 'integer',
        'stock'     => 'integer',
    ];

    protected $with = ['user', 'image'];

    protected $attributes = [
        'status'    => self::ACTIVE,
    ];

    public function orders() {
        return $this->hasMany(Order::class);
    }

    public function user() {
        return $this->belongsTo(User::class);
    }

    public function image() {
        return $this->belongsTo(Image::class);
    }
}
