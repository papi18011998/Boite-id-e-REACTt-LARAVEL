<?php

namespace App\Http\Controllers;

use App\Models\Idea;
use Illuminate\Http\JsonResponse;
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
    public function store(Request $request){
        $new_idea = Idea::create([
            'title'=>$request->title,
            'description'=>$request->description,
            'status'=>0
        ]);
        return $new_idea;
    }
    public function update($id,Request $request){
        $get_idea_to_update = Idea::findOrFail($id);
        $get_idea_to_update->update([
            'title'=>$request->title,
            'description'=>$request->description,
            'status'=>0
        ]);
        return $get_idea_to_update;
    }
}