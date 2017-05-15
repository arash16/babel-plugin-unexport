'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (_ref) {
	var t = _ref.types;

	function ignore(path, state) {
		if (state.opts.exportGlobals || process.env.EXPORT_GLOBALS == 'true') if (path.parent.type == 'Program') return true;
	}

	return {
		manipulateOptions: function manipulateOptions(opts, parserOpts, file) {
			parserOpts.allowImportExportEverywhere = true;
			parserOpts.allowReturnOutsideFunction = true;
		},

		visitor: {
			ExportAllDeclaration: function ExportAllDeclaration(path, state) {
				if (ignore(path, state)) return;
				path.remove();
			},
			ExportDefaultDeclaration: function ExportDefaultDeclaration(path, state) {
				if (ignore(path, state)) return;

				var node = path.node;

				if (node.declaration.id) path.replaceWith(node.declaration);else path.remove();
			},
			ExportNamedDeclaration: function ExportNamedDeclaration(path, state) {
				if (ignore(path, state)) return;

				var node = path.node;

				if (node.declaration) path.replaceWith(node.declaration);else path.remove();
			}
		}
	};
};

;
