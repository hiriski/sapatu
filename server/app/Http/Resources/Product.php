<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Product extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        // return parent::toArray($request);
        return [
            'id'        => $this->id,
            'title'     => $this->title,
            'body'      => $this->body,
            'price'     => $this->price,
            'size'      => $this->size,
            'stock'     => $this->stock,
            'user'      => new User($this->whenLoaded('user')),
            'image'     => new Image($this->whenLoaded('image')),
            'created_at'=> $this->created_at,
        ];
    }
}
