use neon::prelude::*;
use neon::types::buffer::TypedArray;
use types::Analasys;
extern crate neon_serde3;
extern crate serde;

mod types;

fn hello(mut cx: FunctionContext) -> JsResult<JsString> {
    Ok(cx.string("hello node"))
}

fn return_object(mut cx: FunctionContext) -> JsResult<JsValue> {
    let y = Analasys {
        age: Some(3),
        average_color: None,
        histogram: None,
        histogram_weigthed: None,
    };

    let something =
        neon_serde3::to_value(&mut cx, &y).or_else(|e| cx.throw_error(e.to_string()))?;
    Ok(something)
}

fn complex_type(mut cx: FunctionContext) -> JsResult<JsBuffer> {
    let mut len = cx.argument::<JsBuffer>(0)?;

    for elem in len.as_mut_slice(&mut cx).iter_mut() {
        *elem += 1 as u8;
    }

    Ok(len)
}

#[neon::main]
fn main(mut cx: ModuleContext) -> NeonResult<()> {
    cx.export_function("hello", hello)?;
    cx.export_function("complexType", complex_type)?;
    cx.export_function("returnObject", return_object)?;
    Ok(())
}
