<?php

namespace App\Http\Controllers;

use App\Models\Patient;
use Illuminate\Http\Request;

class PatientController extends Controller
{
    public function index()
    {
        return Patient::with('consultations')->get();
    }

    public function store(Request $request)
    {
        $patient = Patient::create($request->validate([
            'name' => 'required|string|max:255',
        ]));
        return response()->json($patient, 201);
    }

    public function show(Patient $patient)
    {
        return $patient->load('consultations');
    }

    public function update(Request $request, Patient $patient)
    {
        $patient->update($request->validate([
            'name' => 'required|string|max:255',
        ]));
        return response()->json($patient);
    }

    public function destroy(Patient $patient)
    {
        $patient->delete();
        return response()->noContent();
    }
}
