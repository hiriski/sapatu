<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Order extends JsonResource
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
            'id'            => $this->id,
            'quantity'      => $this->quantity,
            'notes'         => $this->notes,
            'user'          => $this->whenLoaded('user'),
            'product'       => $this->whenLoaded('product')
            'items'         => $this->whenLoaded('items')
            // 'user'          => $this->user,
            // 'product'       => $this->whenLoaded('product'),
            // 'created_at'    => $this->created_at,
        ];
    }
}
