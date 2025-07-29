<?php

namespace App\Http\Controllers;

use App\Models\Consultation;
use App\Models\Patient;
use Illuminate\Http\Request;

class ConsultationController extends Controller
{
    public function index(Patient $patient)
    {
        return $patient->consultations;
    }

    public function store(Request $request, Patient $patient)
    {
        $data = $request->validate([
            'creatinine' => 'required|integer',
            'blood_pressure' => 'required|string',
            'weight_change' => 'required|string',
        ]);
        $consultation = $patient->consultations()->create($data);
        return response()->json($consultation, 201);
    }

    public function show(Patient $patient, Consultation $consultation)
    {
        return $consultation;
    }

    public function update(Request $request, Patient $patient, Consultation $consultation)
    {
        $data = $request->validate([
            'creatinine' => 'required|integer',
            'blood_pressure' => 'required|string',
            'weight_change' => 'required|string',
        ]);
        $consultation->update($data);
        return response()->json($consultation);
    }

    public function destroy(Patient $patient, Consultation $consultation)
    {
        $consultation->delete();
        return response()->noContent();
    }
}
