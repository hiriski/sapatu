<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\URL;

class Image extends JsonResource
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
            'image_sm'      => URL::to('/storage/images/') . '/' . $this->image_type . '/' . $this->image_sm,
            'image_md'      => URL::to('/storage/images/') . '/' . $this->image_type . '/' . $this->image_md,
            'image_lg'      => URL::to('/storage/images/') . '/' . $this->image_type . '/' . $this->image_lg,
            'image_type'    => $this->image_type
        ];
    }
}
