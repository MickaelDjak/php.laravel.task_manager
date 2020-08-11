<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Task;

class TaskController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * @param Request $request
     * @return mixed
     */
    public function index(Request $request)
    {
        return Task::query()
            ->where('user_id', $request->user()->id)
            ->orderByDesc('created_at')
            ->with('user')
            ->take(20)
            ->get();
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'name' => ['required', 'max:50'],
            'description' => ['required', 'max:255']
        ]);

        $task = $request->user()
            ->tasks()
            ->create($request->only(['name', 'description']));

        return response()->json($task->with('user')->find($task->id));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'name' => ['required', 'max:50'],
            'description' => ['required', 'max:255']
        ]);

        $task = $request->user()->tasks()->findOrFail($id);

        $task->fill($request->only(['name', 'description']));

        $task->save();

        return response()->json($task->with('user')->find($task->id));
    }

    /**
     * @param Request $request
     * @param $id
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\Response
     */
    public function destroy(Request $request, $id)
    {
        $request->user()->tasks()->findOrFail($id)->delete();

        return response([]);
    }
}
