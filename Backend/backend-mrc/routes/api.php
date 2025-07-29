<?php

use App\Http\Controllers\PatientController;
use App\Http\Controllers\ConsultationController;

Route::apiResource('patients', PatientController::class);
Route::apiResource('patients.consultations', ConsultationController::class);

Route::get('/ping', function () {
    return response()->json(['message' => 'API Laravel fonctionne !']);
});