<?php

namespace App\Services;

use App\Models\Lead;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use PhpOffice\PhpSpreadsheet\IOFactory;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;

class LeadService
{
    protected $dataDir = 'data';
    protected $fileName = 'leads.xlsx';

    public function updateExcel(Lead $lead)
    {
        $filePath = storage_path('app/' . $this->dataDir . '/' . $this->fileName);
        $directory = storage_path('app/' . $this->dataDir);

        if (!File::exists($directory)) {
            File::makeDirectory($directory, 0755, true);
        }

        if (File::exists($filePath)) {
            $spreadsheet = IOFactory::load($filePath);
            $sheet = $spreadsheet->getActiveSheet();
        } else {
            $spreadsheet = new Spreadsheet();
            $sheet = $spreadsheet->getActiveSheet();
            $sheet->setTitle('Leads');

            $headers = ['ID', 'Name', 'Email', 'WhatsApp', 'Residency', 'Capital', 'Objective', 'Timeline', 'Date'];
            foreach ($headers as $index => $header) {
                $sheet->setCellValue([$index + 1, 1], $header);
            }
        }

        $lastRow = $sheet->getHighestRow();
        $newRow = $lastRow + 1;

        $sheet->setCellValue([1, $newRow], $lead->id);
        $sheet->setCellValue([2, $newRow], $lead->name);
        $sheet->setCellValue([3, $newRow], $lead->email);
        $sheet->setCellValue([4, $newRow], $lead->whatsapp);
        $sheet->setCellValue([5, $newRow], $lead->residency);
        $sheet->setCellValue([6, $newRow], $lead->capital);
        $sheet->setCellValue([7, $newRow], $lead->objective);
        $sheet->setCellValue([8, $newRow], $lead->timeline);
        $sheet->setCellValue([9, $newRow], $lead->created_at->toDateTimeString());

        $writer = new Xlsx($spreadsheet);
        $writer->save($filePath);
    }
}
