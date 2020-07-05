<?php

function check_valid(
    int $minimum,
    int $maximum,
    array $grades,
    bool $use_average = false
): bool {

    // valid assignments should never allow fewer than 0 points
    $absolute_minimum = 0;

    // valid assignments should never exceed more than 100 possible points
    $absolute_maximum = 100;

    if ($minimum < $absolute_minimum) return false;
    if ($maximum > $absolute_maximum) return false;

    if ($use_average) {
        return check_average_within_bounds(
            $minimum,
            $maximum,
            $grades,
        );
    }

    return check_all_values_within_bounds(
        $minimum,
        $maximum,
        $grades,
    );
}

function check_all_values_within_bounds(
    int $minimumBound,
    int $maximumBound,
    array $grades
): bool {

    if ($min < $minimumBound) return false;
    if ($max > $maximumBound) return false;
    return true;
}

function check_average_within_bounds(
    int $minimumBound,
    int $maximumBound,
    array $grades
): bool {
    $avg = calculate_average($grades);
    if ($avg < $minimumBound) return false;
    if ($avg > $maximumBound) return false;
    return true;
}

function calculate_average(array $grades): int {
    return array_sum($grades)/count($value);
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