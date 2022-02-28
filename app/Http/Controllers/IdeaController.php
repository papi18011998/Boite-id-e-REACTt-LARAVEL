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
        return new JsonResponse($idea,200);
    }
    public function store(Request $request){
        $new_idea = Idea::create([
            'title'=>$request->title,
            'description'=>$request->description,
            'status'=>0
        ]);
        return new JsonResponse($new_idea,201);
    }
    public function update($id,Request $request){
        $get_idea_to_update = Idea::find($id);
        $message = '';
        $status = 0;
        if (is_null($get_idea_to_update)){
            $message = "L'idée que vous voulez modifier n'existe pas ";
            $status = 404;
        }else{
            $get_idea_to_update->update([
                'title'=>$request->title,
                'description'=>$request->description,
                'status'=>0
            ]);
            $message = $get_idea_to_update;
            $status = 200;
        }
        return new JsonResponse($message,$status);
    }
    public function delete($id,Request $request){
        $get_idea_to_delete = Idea:: find($id);
        $message = '';
        $status = 0;
        //testing if the idea is null
        if (is_null($get_idea_to_delete)){
            $message ="Cette idée n'existe pas";
            $status = 404;
        }else{
        $title_idea = $get_idea_to_delete->title;
        $message = "L'idée $title_idea a bien été suprimmé!!!";
        $get_idea_to_delete->delete();
        $status =200;
        }
        return new JsonResponse($message,$status);
    }
}