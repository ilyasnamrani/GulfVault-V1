<?php

namespace App\Http\Controllers;

use App\Models\Lead;
use App\Services\LeadService;
use Illuminate\Http\Request;

class LeadController extends Controller
{
    protected $leadService;

    public function __construct(LeadService $leadService)
    {
        $this->leadService = $leadService;
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'nullable|email|max:255',
            'whatsapp' => 'nullable|string|max:20',
            'residency' => 'nullable|string|max:255',
            'capital' => 'nullable|string|max:255',
            'objective' => 'nullable|string|max:255',
            'timeline' => 'nullable|string|max:255',
        ]);

        $lead = Lead::create($validated);

        try {
            $this->leadService->updateExcel($lead);
        } catch (\Exception $e) {
            // Log error but don't fail the request if Excel fails
            \Log::error('Excel update failed: ' . $e->getMessage());
        }

        return response()->json($lead, 201);
    }
}
