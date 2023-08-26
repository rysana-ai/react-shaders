import { log } from './logging'

export type Vector2 = [number, number]
export type Vector3 = [number, number, number]
export type Vector4 = [number, number, number, number]
// rome-ignore format:
export type Matrix2 = [
  number, number,
  number, number,
]
// rome-ignore format:
export type Matrix3 = [
  number, number, number,
  number, number, number,
  number, number, number,
]
// rome-ignore format:
export type Matrix4 = [
  number, number, number, number,
  number, number, number, number,
  number, number, number, number,
  number, number, number, number,
]

export type Uniforms = {
  '1i': number
  '2i': Vector2
  '3i': Vector3
  '4i': Vector4
  '1f': number
  '2f': Vector2
  '3f': Vector3
  '4f': Vector4
  '1iv': Float32List
  '2iv': Float32List
  '3iv': Float32List
  '4iv': Float32List
  '1fv': Float32List
  '2fv': Float32List
  '3fv': Float32List
  '4fv': Float32List
  Matrix2fv: Float32List
  Matrix3fv: Float32List
  Matrix4fv: Float32List
}

export type UniformType = keyof Uniforms

export const processUniform = <T extends UniformType>(
  gl: WebGLRenderingContext,
  location: WebGLUniformLocation,
  t: T,
  value: Uniforms[T],
) => {
  switch (t) {
    case '1f':
      // @ts-expect-error TODO: Recognize type from generic.
      gl.uniform1f(location, value)
      break
    case '2f':
      // @ts-expect-error TODO: Recognize type from generic.
      gl.uniform2f(location, value[0], value[1])
      break
    case '3f':
      // @ts-expect-error TODO: Recognize type from generic.
      gl.uniform3f(location, value[0], value[1], value[2])
      break
    case '4f':
      // @ts-expect-error TODO: Recognize type from generic.
      gl.uniform4f(location, value[0], value[1], value[2], value[3])
      break
    case '1i':
      // @ts-expect-error TODO: Recognize type from generic.
      gl.uniform1i(location, value)
      break
    case '2i':
      // @ts-expect-error TODO: Recognize type from generic.
      gl.uniform2i(location, value[0], value[1])
      break
    case '3i':
      // @ts-expect-error TODO: Recognize type from generic.
      gl.uniform3i(location, value[0], value[1], value[2])
      break
    case '4i':
      // @ts-expect-error TODO: Recognize type from generic.
      gl.uniform3i(location, value[0], value[1], value[2], value[3])
      break
    case '1iv':
      // @ts-expect-error TODO: Recognize type from generic.
      gl.uniform1iv(location, value)
      break
    case '2iv':
      // @ts-expect-error TODO: Recognize type from generic.
      gl.uniform2iv(location, value)
      break
    case '3iv':
      // @ts-expect-error TODO: Recognize type from generic.
      gl.uniform3iv(location, value)
      break
    case '4iv':
      // @ts-expect-error TODO: Recognize type from generic.
      gl.uniform4iv(location, value)
      break
    case '1fv':
      // @ts-expect-error TODO: Recognize type from generic.
      gl.uniform1fv(location, value)
      break
    case '2fv':
      // @ts-expect-error TODO: Recognize type from generic.
      gl.uniform2fv(location, value)
      break
    case '3fv':
      // @ts-expect-error TODO: Recognize type from generic.
      gl.uniform3fv(location, value)
      break
    case '4fv':
      // @ts-expect-error TODO: Recognize type from generic.
      gl.uniform4fv(location, value)
      break
    case 'Matrix2fv':
      // @ts-expect-error TODO: Recognize type from generic.
      gl.uniformMatrix2fv(location, false, value)
      break
    case 'Matrix3fv':
      // @ts-expect-error TODO: Recognize type from generic.
      gl.uniformMatrix3fv(location, false, value)
      break
    case 'Matrix4fv':
      // @ts-expect-error TODO: Recognize type from generic.
      gl.uniformMatrix4fv(location, false, value)
      break
    default:
      break
  }
}

export const uniformTypeToGLSLType = (t: string) => {
  switch (t) {
    case '1f':
      return 'float'
    case '2f':
      return 'vec2'
    case '3f':
      return 'vec3'
    case '4f':
      return 'vec4'
    case '1i':
      return 'int'
    case '2i':
      return 'ivec2'
    case '3i':
      return 'ivec3'
    case '4i':
      return 'ivec4'
    case '1iv':
      return 'int'
    case '2iv':
      return 'ivec2'
    case '3iv':
      return 'ivec3'
    case '4iv':
      return 'ivec4'
    case '1fv':
      return 'float'
    case '2fv':
      return 'vec2'
    case '3fv':
      return 'vec3'
    case '4fv':
      return 'vec4'
    case 'Matrix2fv':
      return 'mat2'
    case 'Matrix3fv':
      return 'mat3'
    case 'Matrix4fv':
      return 'mat4'
    default:
      console.error(
        log(
          `The uniform type "${t}" is not valid, please make sure your uniform type is valid`,
        ),
      )
  }
}
