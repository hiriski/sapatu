<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    use HasFactory;

    const SIZES = [
        'image_sm',
        'image_md',
        'image_lg',
    ];

    protected $fillable = [
        'image_sm',
        'image_md',
        'image_lg',
        'image_type'
    ];

    public function post() {
        return $this->belongsTo(Post::class);
    }
}
