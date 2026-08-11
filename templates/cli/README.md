# Command-Line Application Template

This template provides a small Python command-line application foundation for
generated apps.

- Runtime: Python 3.11 or newer.
- CLI: Python standard-library `argparse`.
- Tests: Python standard-library `unittest`, organized into unit,
  integration, and end-to-end layers.

Copy `files/` into a target project directory before generation starts. Run the
application with `python -m app` and the test suite with
`python -m unittest discover -s tests`.
