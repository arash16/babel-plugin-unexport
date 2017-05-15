export default function ({ types: t }) {
	function ignore(path, state) {
		if (state.opts.exportGlobals || process.env.EXPORT_GLOBALS == 'true')
			if (path.parent.type == 'Program')
				return true;
	}

	return {
		manipulateOptions(opts, parserOpts, file) {
			parserOpts.allowImportExportEverywhere = true;
			parserOpts.allowReturnOutsideFunction = true;
		},
		visitor: {
			ExportAllDeclaration(path, state) {
				if (ignore(path, state)) return;
				path.remove();
			},
			ExportDefaultDeclaration(path, state) {
				if (ignore(path, state)) return;

				const { node } = path;
				if (node.declaration.id)
					 path.replaceWith(node.declaration);
				else path.remove();
			},
			ExportNamedDeclaration(path, state) {
				if (ignore(path, state)) return;

				const { node } = path;
				if (node.declaration)
					 path.replaceWith(node.declaration);
				else path.remove();
			}
		}
	}
};
