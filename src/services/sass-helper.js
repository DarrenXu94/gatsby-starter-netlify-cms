export const PREFIX = '--';

export default {
    readProperty(name) {
        const bodyStyles = window.getComputedStyle(document.body);
        return bodyStyles.getPropertyValue(PREFIX + name);
    }
}