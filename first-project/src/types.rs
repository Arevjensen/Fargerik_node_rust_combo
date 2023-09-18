use serde::{Deserialize, Serialize};

#[derive(Serialize, Debug, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Analysis {
    pub age: Option<u32>,
    pub average_color: Option<u32>,
    pub histogram: Option<String>,
    pub histogram_weigthed: Option<String>,
}

#[derive(Serialize, Debug, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct HexColor(String);

#[derive(Serialize, Debug, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct RGBColor {
    pub r: u8,
    pub g: u8,
    pub b: u8,
}

#[derive(Serialize, Debug, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct HSLUVColor {
    pub h: u8,
    pub s: u8,
    pub luv: u8,
}

#[derive(Serialize, Debug, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct HSLColor {
    pub h: u8,
    pub s: u8,
    pub l: u8,
}
