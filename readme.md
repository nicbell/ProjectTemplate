# Project Template

You will need Node.js. [Setting up Node.js in Windows](https://gist.github.com/nicbell/fea544f0339efacd78f1).

## My project template for front-end builds.

This project uses NPM scripts. We only need to run `npm run build` which will automatically run `prebuild` and install everything we need.

To create a watcher we can either run `npm run watch`.

## Adding generated files to .net projects.

```xml
<Target Name="BeforeBuild">
	<ItemGroup>
		<Content Include="wwwroot\dist\**\*.*" />
	</ItemGroup>
</Target>
```

## Notes

Path to assets can be changed in `package.json` currently points to `wwwroot`.
