<?php

namespace Database\Factories;

use App\Models\Idea;
use Illuminate\Database\Eloquent\Factories\Factory;

class IdeaFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    protected $model = Idea::class;
    public function definition()
    {
        return [
            'title'=> $this->faker->unique()->sentence,
            'description'=> $this->faker->paragraph,
            'status'=>$this->faker->boolean
        ];
    }
}
