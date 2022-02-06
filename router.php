<?php
if (is_dir(__DIR__ . $_SERVER['PHP_SELF'])) {
    include __DIR__ . $_SERVER['PHP_SELF'] . '/index.php';
} else {
    // Try to load file directly from disk.
    return false;
}
?>