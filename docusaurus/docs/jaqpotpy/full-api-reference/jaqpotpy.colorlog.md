# jaqpotpy.colorlog package

## Submodules

## jaqpotpy.colorlog.colorlog module

The ColoredFormatter class.

### *class* jaqpotpy.colorlog.colorlog.ColoredFormatter(fmt=None, datefmt=None, style='%', log_colors=None, reset=True, secondary_log_colors=None)

Bases: `Formatter`

A formatter that allows colors to be placed in the format string.
Intended to help in creating more readable logging output.

#### color(log_colors, level_name)

Return escape codes from a `log_colors` dict.

#### format(record)

Format a message from a record object.

### *class* jaqpotpy.colorlog.colorlog.LevelFormatter(fmt=None, datefmt=None, style='%', log_colors=None, reset=True, secondary_log_colors=None)

Bases: [`ColoredFormatter`](#jaqpotpy.colorlog.colorlog.ColoredFormatter)

An extension of ColoredFormatter that uses per-level format strings.

#### format(record)

Customize the message format based on the log level.

### *class* jaqpotpy.colorlog.colorlog.TTYColoredFormatter(\*args, \*\*kwargs)

Bases: [`ColoredFormatter`](#jaqpotpy.colorlog.colorlog.ColoredFormatter)

Blanks all color codes if not running under a TTY.
This is useful when you want to be able to pipe colorlog output to a file.

#### color(log_colors, level_name)

Only returns colors if STDOUT is a TTY.

## jaqpotpy.colorlog.escape_codes module

Generates a dictionary of ANSI escape codes.
[http://en.wikipedia.org/wiki/ANSI_escape_code](http://en.wikipedia.org/wiki/ANSI_escape_code)
Uses colorama as an optional dependency to support color on Windows

### jaqpotpy.colorlog.escape_codes.parse_colors(sequence)

Return escape codes from a color sequence.

## jaqpotpy.colorlog.logging module

Wrappers around the logging module.

### jaqpotpy.colorlog.logging.basicConfig(\*\*kwargs)

Call `logging.basicConfig` and override the formatter it creates.

### jaqpotpy.colorlog.logging.ensure_configured(func)

Modify a function to call `basicConfig` first if no handlers exist.

## Module contents

### *class* jaqpotpy.colorlog.ColoredFormatter(fmt=None, datefmt=None, style='%', log_colors=None, reset=True, secondary_log_colors=None)

Bases: `Formatter`

A formatter that allows colors to be placed in the format string.
Intended to help in creating more readable logging output.

#### color(log_colors, level_name)

Return escape codes from a `log_colors` dict.

#### format(record)

Format a message from a record object.

### *class* jaqpotpy.colorlog.LevelFormatter(fmt=None, datefmt=None, style='%', log_colors=None, reset=True, secondary_log_colors=None)

Bases: [`ColoredFormatter`](#jaqpotpy.colorlog.colorlog.ColoredFormatter)

An extension of ColoredFormatter that uses per-level format strings.

#### format(record)

Customize the message format based on the log level.

### *class* jaqpotpy.colorlog.StreamHandler(stream=None)

Bases: `Handler`

A handler class which writes logging records, appropriately formatted,
to a stream. Note that this class does not close the stream, as
sys.stdout or sys.stderr may be used.

#### emit(record)

Emit a record.

If a formatter is specified, it is used to format the record.
The record is then written to the stream with a trailing newline.  If
exception information is present, it is formatted using
traceback.print_exception and appended to the stream.  If the stream
has an ‘encoding’ attribute, it is used to determine how to do the
output to the stream.

#### flush()

Flushes the stream.

#### setStream(stream)

Sets the StreamHandler’s stream to the specified value,
if it is different.

Returns the old stream, if the stream was changed, or None
if it wasn’t.

#### terminator *= '\\n'*

### *class* jaqpotpy.colorlog.TTYColoredFormatter(\*args, \*\*kwargs)

Bases: [`ColoredFormatter`](#jaqpotpy.colorlog.colorlog.ColoredFormatter)

Blanks all color codes if not running under a TTY.
This is useful when you want to be able to pipe colorlog output to a file.

#### color(log_colors, level_name)

Only returns colors if STDOUT is a TTY.

### jaqpotpy.colorlog.basicConfig(\*\*kwargs)

Call `logging.basicConfig` and override the formatter it creates.

### jaqpotpy.colorlog.critical(msg, \*args, \*\*kwargs)

Log a message with severity ‘CRITICAL’ on the root logger. If the logger
has no handlers, call basicConfig() to add a console handler with a
pre-defined format.

### jaqpotpy.colorlog.debug(msg, \*args, \*\*kwargs)

Log a message with severity ‘DEBUG’ on the root logger. If the logger has
no handlers, call basicConfig() to add a console handler with a pre-defined
format.

### jaqpotpy.colorlog.error(msg, \*args, \*\*kwargs)

Log a message with severity ‘ERROR’ on the root logger. If the logger has
no handlers, call basicConfig() to add a console handler with a pre-defined
format.

### jaqpotpy.colorlog.exception(msg, \*args, exc_info=True, \*\*kwargs)

Log a message with severity ‘ERROR’ on the root logger, with exception
information. If the logger has no handlers, basicConfig() is called to add
a console handler with a pre-defined format.

### jaqpotpy.colorlog.getLogger(name=None)

Return a logger with the specified name, creating it if necessary.

If no name is specified, return the root logger.

### jaqpotpy.colorlog.info(msg, \*args, \*\*kwargs)

Log a message with severity ‘INFO’ on the root logger. If the logger has
no handlers, call basicConfig() to add a console handler with a pre-defined
format.

### jaqpotpy.colorlog.log(level, msg, \*args, \*\*kwargs)

Log ‘msg % args’ with the integer severity ‘level’ on the root logger. If
the logger has no handlers, call basicConfig() to add a console handler
with a pre-defined format.

### jaqpotpy.colorlog.warning(msg, \*args, \*\*kwargs)

Log a message with severity ‘WARNING’ on the root logger. If the logger has
no handlers, call basicConfig() to add a console handler with a pre-defined
format.
