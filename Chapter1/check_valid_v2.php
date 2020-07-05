<?php

function check_valid(
    int $minimum,
    int $maximum,
    array $values,
    bool $use_average = false
): bool {

    if ($minimum < 0 || $maximum > 100) return false;

    $min = min($values);
    $max = max($values);
    if ($sum_or_average) {
        $min = $max = array_sum($values)/count($values);
    }

    if (!($minimum < $min) || !($maximum > $max)) return false;
    if ($maximum > $min && $minimum < $max) return true;
    return false;
}

// Check for all values within bounds.
$result = check_valid(0, 100, [10, 20, 30, 40, 50, 60]);
$result_string = $result ? "true" : "false";
print("Expected true, got: ".$result_string."\n");

// Check for value below minimum (0).
print("Expected false, got: ".check_valid(0, 100, [-10, 20, 30, 40, 50, 60])."\n");
// Check for value above maximum (100).
print("Expected false, got: ".check_valid(0, 100, [10, 20, 30, 40, 50, 110])."\n");
// Check for value at minimum (0).
print("Expected false, got: ".check_valid(0, 100, [0, 20, 30, 40, 50, 60])."\n");
// Check for value at maximum (100).
print("Expected false, got: ".check_valid(0, 100, [10, 20, 30, 40, 50, 100])."\n");

// Check for average within bounds.
print("Expected true, got: ".check_valid(0, 100, [10, 20, 30, 40, 50, 60])."\n");

// Check for average below minimum.
print("Expected false, got: ".check_valid(40, 80, [10, 20, 30, 40, 50, 60])."\n");
// Check for value at minimum (35).
print("Expected false, got: ".check_valid(35, 80, [10, 20, 30, 40, 50, 60])."\n");
// Check for value at maximum (80).
print("Expected false, got: ".check_valid(40, 80, [70, 70, 70, 90, 90, 90])."\n");