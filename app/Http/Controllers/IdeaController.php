<?php

namespace App\Http\Controllers;

use App\Models\Idea;
use Illuminate\Http\Request;

class IdeaController extends Controller
{
    // Get all Ideas
    public function index(){
        return Idea::all();
    }
    // Get an idea
    public function show($id){
        $idea = Idea::findOrFail($id);
        return $idea;
    }
}