import React from 'react'

export const Category = (props) => {
    return (
        <div className="categories">
            {props.data.map((d, i) => (
                <div key={i} style={{ width: "100%" }}>
                    <div style={{ height: "36px", background: "#dedede", marginBottom: "8px" }} />
                    {d.features.map((fl, idx) => {
                        if (props.isToggleDiff) {
                            if (fl.properties && fl.properties.isDifferent) {
                                return (<div key={idx} style={{ paddingLeft: "15px" }}>
                                    <div className="cat">{fl.values[props.selectedProduct]}</div>
                                </div>)
                            } else {
                                return (<div className="noDiff" style={{ height: "44px" }}>-</div>)
                            }
                        } else {
                            return (<div key={idx} style={{ paddingLeft: "15px" }}>
                                <div className="cat">{fl.values[props.selectedProduct]}</div>
                            </div>)
                        }
                    }
                    )}
                </div>
            ))}
        </div>
    )
}