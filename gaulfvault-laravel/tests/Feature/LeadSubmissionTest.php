<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use App\Models\Lead;

class LeadSubmissionTest extends TestCase
{
    use RefreshDatabase;

    public function test_lead_can_be_submitted()
    {
        $payload = [
            'name' => 'John Doe',
            'email' => 'john@example.com',
            'whatsapp' => '+123456789',
            'residency' => 'Dubai',
            'capital' => '100k',
            'objective' => 'Investment',
            'timeline' => 'ASAP',
        ];

        $response = $this->postJson('/api/leads', $payload);


        $response->assertStatus(201)
            ->assertJsonFragment(['name' => 'John Doe']);

        $this->assertDatabaseHas('leads', [
            'email' => 'john@example.com',
        ]);
    }
}
