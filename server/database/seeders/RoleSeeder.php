<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Role;

class RoleSeeder extends Seeder
{

    private $roles = [
        'Customer Sevice'   => 1,
        'Admin'             => 2,
        'Tim Gudang'        => 3,
        'Owner'             => 4,
        'Supervisor'        => 5,
        'Maintainer'        => 6,
    ];

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach($this->roles as $title => $id) {
            Role::create([
                'id'    => $id,
                'title' => $title,
                'description'   => null
            ]);
        }
    }
}
