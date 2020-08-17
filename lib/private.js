export function filterItems(items, session, all) {
    if (!session) return items.slice(0,3).filter(item => item.hidden === false);
    return all ? items : items.slice(0,3);
}