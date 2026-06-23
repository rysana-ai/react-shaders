# react-shaders &nbsp; <a href="https://www.npmjs.com/package/react-shaders"><picture><source media="(prefers-color-scheme: dark)" srcset="https://shieldcn.dev/npm/react-shaders.svg?variant=ghost" /><img alt="badge" src="https://shieldcn.dev/npm/react-shaders.svg?variant=ghost&amp;mode=light" /></picture></a> <a href="https://www.npmjs.com/package/react-shaders"><picture><source media="(prefers-color-scheme: dark)" srcset="https://shieldcn.dev/npm/dm/react-shaders.svg?variant=ghost&amp;logo=false" /><img alt="downloads" src="https://shieldcn.dev/npm/dm/react-shaders.svg?variant=ghost&amp;mode=light&amp;logo=false" /></picture></a>  <a href="https://x.com/rysana"><picture><source media="(prefers-color-scheme: dark)" srcset="https://shieldcn.dev/x/follow/rysana.svg?variant=ghost" /><img alt="follow" src="https://shieldcn.dev/x/follow/rysana.svg?variant=ghost&amp;mode=light" /></picture></a>

A TypeScript library for creating GLSL/WebGL shaders with support for modern bindings like Shadertoy's.
- Zero dependencies
- Tiny
- Just works
  
</p>

**Install:**

```bash
npm i react-shaders
```

**Usage:**

```jsx
import { Shader } from 'react-shaders'
import code from './example.glsl'

return (
  <Shader fs={code} />
)
```
```glsl
void mainImage(out vec4 O,in vec2 I){
  I=.5-(I/iResolution.xy);
  vec3 col=.5+vec3(I,.5*sin(iTime));
  I*=vec2(1.,iResolution.y/iResolution.x);
  float z=.5*sin((dot(I,I)+iTime*5e-2)/.01);
  O=vec4(col*(1.+z),1.);}
```
