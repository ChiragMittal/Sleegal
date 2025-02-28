import React from "react";
import PropTypes from "prop-types";
import dateformat from "dateformat";
import isOverdue from "./isOverdue";
import todoApi from "./todoApi";

function Item({ item, completeItem }) {
    const itemClass = `list-group-item list-group-item-${isOverdue(item) ? "danger" : "info"}`;
    return (
        <div>        
        
        <li className={itemClass}>
            <div className="item">
                <span className={`item-title${item.complete ? " complete-item" : ""}`}>
                    <i className={isOverdue(item) ? "fas fa-exclamation-circle" : ""} />
                    {`Name:${item.name} - Description:${item.description} - Time:${dateformat(new Date(item.timsestamp), "dd-mmm-yyyy")}`}
                </span>
                {!item.complete && !isOverdue(item) ?
                    <button type="button" className="btn btn-link" onClick={completeItem}>
                        Complete item
                    </button>:null
                }
            </div>
        </li>
    </div>
    );
}

Item.propTypes = {
    item: PropTypes.object.isRequired,
    completeItem: PropTypes.func.isRequired,
};

export default Item;
