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
            'product'       => $this->whenLoaded('product'),
            'user'          => $this->whenLoaded('user'),
            'created_at'    => $this->created_at,
        ];
    }
}
