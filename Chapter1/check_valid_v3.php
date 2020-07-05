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

    if ($min < $minimum) return false;
    if ($max > $maximum) return false;
    return true;
}

// Check for all values within bounds.
print("Result: ".check_valid(0, 100, [10, 20, 30, 40, 50, 60])."\n");

// Check for value below minimum (0).
print("Result: ".check_valid(0, 100, [-10, 20, 30, 40, 50, 60])."\n");
// Check for value above maximum (100).
print("Result: ".check_valid(0, 100, [10, 20, 30, 40, 50, 110])."\n");
// Check for value at minimum (0).
print("Result: ".check_valid(0, 100, [0, 20, 30, 40, 50, 60])."\n");
// Check for value at maximum (100).
print("Result: ".check_valid(0, 100, [10, 20, 30, 40, 50, 100])."\n");

// Check for average within bounds.
print("Result: ".check_valid(0, 100, [10, 20, 30, 40, 50, 60])."\n");

// Check for average below minimum.
print("Result: ".check_valid(40, 80, [10, 20, 30, 40, 50, 60])."\n");
// Check for value at minimum (35).
print("Result: ".check_valid(35, 80, [10, 20, 30, 40, 50, 60])."\n");
// Check for value at maximum (80).
print("Result: ".check_valid(40, 80, [70, 70, 70, 90, 90, 90])."\n");