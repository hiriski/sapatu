<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Receipt extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id'            => $this->id,
            'receipt_number'=> $this->receipt_number,
            'order'         => $this->whenLoaded('order'),
            'image'         => $this->whenLoaded('image'),
            'order'         => $this->whenLoaded('order'),
            'created_at'    => $this->created_at,
        ];
    }
}
