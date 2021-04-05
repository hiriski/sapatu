<?php

namespace Database\Factories;

use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProductFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Product::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'title'     => $this->faker->sentence(3),
            'body'      => $this->faker->text,
            'status'    => 'active',
            'stock'     => $this->faker->numberBetween(3, 10),
            'price'     => $this->faker->numberBetween(85000, 120000),
            'size'      => (string) $this->faker->numberBetween(39, 42)
        ];
    }
}
