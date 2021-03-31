<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProductWithRelations extends JsonResource
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
            'stock'     => $this->stock,
            'body'      => $this->body,
            'price'     => $this->price,
            'size'      => $this->size,
            'user'      => new User($this->whenLoaded('user')),
            'image'     => new User($this->whenLoaded('image')),
            'created_at'=> $this->created_at,
        ];
    }
}
