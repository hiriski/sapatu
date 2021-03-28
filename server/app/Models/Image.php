<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    use HasFactory;

    protected $fillable = [
        'image_sm',
        'image_md',
        'image_lg',
    ];

    public function post() {
        return $this->belongsTo(Post::class);
    }
}
